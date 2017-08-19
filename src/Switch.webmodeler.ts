import { Component, createElement } from "react";

import { Switch } from "./components/Switch";
import SwitchContainer, { SwitchContainerProps } from "./components/SwitchContainer";

// tslint:disable class-name
export class preview extends Component<SwitchContainerProps, {}> {
    render() {
        return this.renderSwitch();
    }

    private renderSwitch(hasLabel = false) {
        return createElement(Switch, {
            className: !hasLabel ? this.props.class : undefined,
            isChecked: true,
            onClick: undefined as any,
            status: this.props.editable === "default" ? "enabled" : "disabled",
            style: !hasLabel ? SwitchContainer.parseStyle(this.props.style) : undefined
        });
    }
}

export function getPreviewCss() {
    return require("./ui/Switch.scss");
}
