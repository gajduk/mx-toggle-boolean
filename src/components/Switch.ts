import { SFC, createElement } from "react";
import * as classNames from "classnames";


import "../ui/Switch.scss";

export interface SwitchProps {
    className?: string;
    isChecked: boolean;
    onClick: () => void;
    status: SwitchStatus;
    style?: object;
}

export type SwitchStatus = "enabled" | "disabled" | "no-context";

export const Switch: SFC<SwitchProps> = (props) =>
    createElement("button",
        {
            className: classNames("btn mx-button btn-default", props.className),
            style: props.style,
            onClick: props.status === "enabled" ? props.onClick : undefined,
            dangerouslySetInnerHTML: { __html: props.isChecked ? "X":"Voir" }
        },
        /*
        createElement("input", {
            checked: props.isChecked,
            className: classNames("widget-switch-checkbox", { enabled: props.status === "enabled" }),
            readOnly: true,
            type: "checkbox"
        }),
        createElement("div",
            {
                className: classNames(`widget-switch-btn-wrapper`, {
                    "checked": props.isChecked,
                    "disabled": props.status === "disabled",
                    "no-switch": props.status === "no-context",
                    "un-checked": !props.isChecked
                }),
                onClick: props.status === "enabled" ? props.onClick : undefined
            },
            createElement("small", {
                className: classNames("widget-switch-btn", {
                    left: !props.isChecked,
                    right: props.isChecked
                })
            })
        ),
        */
    );

Switch.displayName = "Switch";
