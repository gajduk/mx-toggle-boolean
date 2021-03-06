import { ShallowWrapper, shallow } from "enzyme";
import { createElement } from "react";

import { Switch, SwitchProps } from "../Switch";

describe("Switch", () => {
    let switchWrapper: ShallowWrapper<SwitchProps, any>;
    let checkbox: ShallowWrapper<any, any>;
    let switchButtonWrapper: ShallowWrapper<any, any>;
    let switchButton: ShallowWrapper<any, any>;
    const createAndFindElements = (props: SwitchProps) => {
        switchWrapper = shallow(createElement(Switch, props));
        checkbox = switchWrapper.find(".widget-switch-checkbox");
        switchButtonWrapper = switchWrapper.find(".widget-switch-btn-wrapper");
        switchButton = switchWrapper.find(".widget-switch-btn");
    };
    const createProps = (props: Partial<SwitchProps>): SwitchProps => {
        props.onClick = jasmine.createSpy("onClick");
        props.isChecked = typeof props.isChecked !== "undefined" ? props.isChecked : true;
        props.status = props.status || "enabled";

        return props as SwitchProps;
    };

    it("should render the structure correctly", () => {
        createAndFindElements(createProps({}));

        expect(switchWrapper).toBeElement(
            createElement("div", { className: "widget-switch auto" },
                createElement("input", {
                    checked: true,
                    className: "widget-switch-checkbox enabled",
                    readOnly: true,
                    type: "checkbox"
                }),
                createElement("div",
                    {
                        className: "widget-switch-btn-wrapper enabled",
                        onClick: jasmine.any(Function) as any
                    },
                    createElement("small", { className: "widget-switch-btn right" })
                ),
            )
        );
    });

    it("that is true should be on", () => {
        createAndFindElements(createProps({}));

        expect(checkbox.props().checked).toBe(true);
    });

    it("that is false should be off", () => {
        createAndFindElements(createProps({ isChecked: false }));

        expect(checkbox.props().checked).toBe(false);
    });

    describe("that is enabled", () => {
        it("should not have the disabled class", () => {
            createAndFindElements(createProps({}));

            expect(checkbox.hasClass("enabled")).toBe(true);
            expect(switchButtonWrapper.hasClass("enabled")).toBe(false);
        });

        it("should handle click events", () => {
            const props = createProps({});
            createAndFindElements(props);

            switchButtonWrapper.simulate("click");

            expect(props.onClick).toHaveBeenCalled();
        });
    });

    describe("that is disabled", () => {
        it("should have the disabled class", () => {
            createAndFindElements(createProps({ status: "disabled" }));

            expect(checkbox.hasClass("enabled")).toBe(false);
            expect(switchButtonWrapper.hasClass("disabled")).toBe(true);
        });

        it("should not handle a click event", () => {
            const props = createProps({ status: "disabled" });
            createAndFindElements(props);

            switchButton.simulate("click");

            expect(props.onClick).not.toHaveBeenCalled();
        });
    });

    describe("without a context", () => {
        it("should have the no-switch class", () => {
            createAndFindElements(createProps({
                isChecked: false,
                status: "no-context"
            }));

            expect(switchButtonWrapper).toHaveClass("no-switch");
        });

        it("should not handle a click event", () => {
            const props = createProps({ status: "no-context" });
            createAndFindElements(props);

            switchButton.simulate("click");

            expect(props.onClick).not.toHaveBeenCalled();
        });
    });
});
