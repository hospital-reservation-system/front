import React from "react";
import cn from "classnames/bind";
import styles from "./TextInput.module.scss";

const cx = cn.bind(styles);

type TextInputProps = {
    label: string;
    requiredSymbol?: React.ReactNode;
    width: string | number;
    height: string | number;
    readOnly?: boolean;
    name: string;
    inputRef?: React.Ref<HTMLInputElement>;
};

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
    (props, ref) => {
        const {
            label,
            requiredSymbol,
            width,
            height,
            readOnly,
            name,
            inputRef,
            ...rest
        } = props;

        const inputStyle = {
            width: typeof width === "number" ? `${width}px` : width,
            height: typeof height === "number" ? `${height}px` : height,
            backgroundColor: readOnly ? "#D9D9D9" : "#FFFFFF",
        };

        return (
            <div className={cx("inputWrapper")}>
                <div className={cx("inputTitle")}>
                    {label}
                    {requiredSymbol && (
                        <span className={cx("requiredSymbol")}>
                            {requiredSymbol}
                        </span>
                    )}
                </div>
                <input
                    type="text"
                    name={name}
                    className={cx("inputContent")}
                    style={inputStyle}
                    readOnly={readOnly}
                    ref={ref || inputRef}
                    {...rest}
                />
            </div>
        );
    }
);

TextInput.displayName = "TextInput";

export default TextInput;
