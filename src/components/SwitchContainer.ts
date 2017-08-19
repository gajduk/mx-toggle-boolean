import { Component, SFCElement, createElement } from "react";

import { Switch, SwitchProps, SwitchStatus } from "./Switch";

interface WrapperProps {
    class?: string;
    mxObject?: mendix.lib.MxObject;
    style?: string;
    readOnly?: boolean;
}

interface SwitchContainerProps extends WrapperProps {
    booleanAttribute: string;
    editable: "default" | "never";
}

interface SwitchContainerState {
    alertMessage?: string;
    isChecked?: boolean;
}

class SwitchContainer extends Component<SwitchContainerProps, SwitchContainerState> {
    private subscriptionHandles: number[];

    constructor(props: SwitchContainerProps) {
        super(props);

        this.subscriptionHandles = [];
        this.state = this.updateState(props.mxObject);
        this.handleToggle = this.handleToggle.bind(this);
        this.subscriptionCallback = this.subscriptionCallback.bind(this);
        this.handleValidations = this.handleValidations.bind(this);

    }

    render() {
        return this.renderSwitch();
    }

    componentWillReceiveProps(newProps: SwitchContainerProps) {
        this.resetSubscriptions(newProps.mxObject);
        this.setState(this.updateState(newProps.mxObject));
    }

    componentWillUnmount() {
        this.subscriptionHandles.forEach(mx.data.unsubscribe);
    }

    private renderSwitch(): SFCElement<SwitchProps> {
        const { class: className, style } = this.props;

        return createElement(Switch, {
            alertMessage: this.state.alertMessage,
            className: className,
            isChecked: this.state.isChecked,
            onClick: this.handleToggle,
            status: this.getSwitchStatus(!this.isReadOnly()),
            style: SwitchContainer.parseStyle(style)
        } as SwitchProps);
    }

    private getAttributeValue(attribute: string, mxObject?: mendix.lib.MxObject): boolean {
        return !!mxObject && mxObject.get(attribute) as boolean;
    }

    private isReadOnly() {
        const { booleanAttribute, editable, mxObject, readOnly } = this.props;
        if (editable === "default" && mxObject) {
            return readOnly || mxObject.isReadonlyAttr(booleanAttribute);
        }

        return true;
    }

    private getSwitchStatus(enabled: boolean): SwitchStatus {
        if (this.props.mxObject) {
            return enabled ? "enabled" : "disabled";
        }

        return "no-context";
    }

    private handleToggle() {
        const { booleanAttribute, mxObject } = this.props;
        if (mxObject) {
            mxObject.set(booleanAttribute, !mxObject.get(booleanAttribute));
        }
    }

    private resetSubscriptions(mxObject?: mendix.lib.MxObject) {
        this.subscriptionHandles.forEach(mx.data.unsubscribe);
        this.subscriptionHandles = [];

        if (mxObject) {
            this.subscriptionHandles.push(mx.data.subscribe({
                callback: this.subscriptionCallback,
                guid: mxObject.getGuid()
            }));

            this.subscriptionHandles.push(mx.data.subscribe({
                attr: this.props.booleanAttribute,
                callback: this.subscriptionCallback,
                guid: mxObject.getGuid()
            }));

            this.subscriptionHandles.push(mx.data.subscribe({
                callback: this.handleValidations,
                guid: mxObject.getGuid(),
                val: true
            }));
        }
    }

    private updateState(mxObject = this.props.mxObject): SwitchContainerState {
        return {
            alertMessage: "",
            isChecked: this.getAttributeValue(this.props.booleanAttribute, mxObject)
        };
    }

    private subscriptionCallback() {
        this.setState(this.updateState());
    }

    private handleValidations(validations: mendix.lib.ObjectValidation[]) {
        const validationMessage = validations[0].getErrorReason(this.props.booleanAttribute);
        validations[0].removeAttribute(this.props.booleanAttribute);
        if (validationMessage) {
            this.setState({ alertMessage: validationMessage });
        }
    }

    public static parseStyle(style = ""): { [key: string]: string } {
        try {
            return style.split(";").reduce<{ [key: string]: string }>((styleObject, line) => {
                const pair = line.split(":");
                if (pair.length === 2) {
                    const name = pair[0].trim().replace(/(-.)/g, match => match[1].toUpperCase());
                    styleObject[name] = pair[1].trim();
                }
                return styleObject;
            }, {});
        } catch (error) {
            // tslint:disable-next-line no-console
            window.console.error("Failed to parse style", style, error);
        }

        return {};
    }
}

export { SwitchContainer as default, SwitchContainerProps };
