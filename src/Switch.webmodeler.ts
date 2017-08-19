import { Component, createElement } from "react";

import { Switch } from "./components/Switch";
import SwitchContainer, { SwitchContainerProps } from "./components/SwitchContainer";

// tslint:disable class-name
export class preview extends Component<SwitchContainerProps, {}> {
    render() {
        return this.renderSwitch();
    }

    private renderSwitch() {
        return createElement(Switch, {
            className: this.props.class,
            isChecked: true,
            onClick: undefined as any,
            status: "enabled" ,
            style: SwitchContainer.parseStyle(this.props.style)
        });
    }
}

export function getPreviewCss() {
    return require("./ui/Switch.scss");
}
