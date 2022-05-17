import React, { useRef, useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Text } from '../elements'
import AffiliateDatePicker from '../elements/affiliate-date-picker'
import device from 'themes/device'
// SVG Component
import CrossIcon from 'images/svg/help/cross.svg'
import EyeIcon from 'images/svg/signup-affiliate-details/eye.svg'

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
    background?: string
    border?: string
    disabled?: boolean
    error?: string
    error_shift?: string
    focus_border?: string
    handleError?: (current_input: React.RefObject<HTMLInputElement>) => void
    height?: string
    id?: string
    is_date?: boolean
    label?: string
    label_color?: string
    label_hover_color?: string
    tablet_background?: string
    password_icon?: boolean
}

type InputWrapperProps = {
    border?: string
    label_hover_color?: string
    focus_border?: string
    error?: string
    disabled?: boolean
}

type StyledInputProps = {
    input_background?: string
    inputColor?: string
    showLabel?: string
    label_focus_color?: string
    background?: string
    label?: string
    error?: string
}

type ValidProps = {
    background?: string
}

type StyledLabelProps = {
    label_color?: string
    tablet_background?: string
    error?: string
    htmlFor?: string
}

type StyledIconProps = {
    disabled?: boolean
    password_icon?: boolean
}

const RelativeWrapper = styled.div`
    position: relative;
`
const InputWrapper = styled.div<InputWrapperProps>`
    /* prettier-ignore */
    width: 100%;
    border: ${(props) => props.border || '1px solid var(--color-grey-2)'};
    border-radius: 4px;
    @media ${device.tabletL} {
        height: 5rem;
    }

    &:hover {
        border-color: var(--color-grey-5);

        & > label {
            color: ${({ label_hover_color }) =>
                label_hover_color ? `var(--color-${label_hover_color})` : 'var(--color-black-3)'};
        }
    }
    &:focus-within {
        border-color: ${({ focus_border }) =>
            focus_border ? `var(--color-${focus_border})` : 'var(--color-green)'};
    }

    ${(props) =>
        !props.error &&
        css`
            border-color: var(--color-grey-7);
        `}
    ${(props) =>
        props.error &&
        css`
            border-color: var(--color-red-1) !important;
            & > label {
                color: var(--color-red-1) !important;
            }
        `}
    ${(props) =>
        props.disabled &&
        css`
            opacity: 0.32;
            pointer-events: none;
        `}
`

const StyledIcon = styled.img<StyledIconProps>`
    position: absolute;
    right: ${(props) => (props.password_icon ? '2.8rem' : '0.8rem')};
    top: 1.2rem;
    height: 1.6rem;
    width: 1.6rem;
    ${(props) =>
        !props.disabled &&
        css`
            cursor: pointer;
        `}
    @media ${device.tablet} {
        right: ${(props) => (props.password_icon ? '4rem' : '2rem')};
        top: 1.6rem;
    }
    @media ${device.desktopL} {
        top: 1rem;
    }
`

const StyledInput = styled.input<StyledInputProps>`
    background: ${({ input_background }) =>
        input_background ? `var(--color-${input_background})` : 'none'};
    color: ${({ inputColor }) =>
        inputColor ? `var(--color-${inputColor})` : 'var(--color-black)'};
    font-size: var(--text-size-s);
    padding: 1rem 1rem 1rem 0.8rem;
    height: ${(props) => props.height || '40px'};
    width: 100%;
    display: block;
    border: none;
    border-radius: 4px;
    @media ${device.tabletL} {
        height: 100%;

        & ~ label {
            font-size: 1.75rem;
            top: 1.5rem;
        }
    }
    @media ${device.mobileL} {
        font-size: 14px;

        & ~ label {
            font-size: 1.5rem;
            top: 1.75rem;
        }
    }

    &::placeholder {
        opacity: ${(props) => (props.showLabel ? 0 : 1)};
        transition: opacity 0.25s;
        padding-left: 0.3rem;
    }
    &:focus {
        outline: none;

        & ~ label {
            transform: translate(-0.6rem, -2rem) scale(0.7);
            color: ${({ label_focus_color }) =>
                label_focus_color ? `var(--color-${label_focus_color})` : 'var(--color-green)'};
            background-color: ${({ background }) =>
                background ? `var(--color-${background})` : 'var(--color-grey-1)'};

            @media ${device.mobileL} {
                transform: translate(-0.6rem, -20px) scale(0.7);
            }
        }
        &::placeholder {
            opacity: 1;
            color: var(--color-grey-5);
            ${(props) =>
                props.label &&
                css`
                    font-size: 14px;
                `}
        }
    }
    &:valid {
        ${(props) =>
            props.value &&
            css<ValidProps>`
                & ~ label {
                    transform: translate(-0.6rem, -2rem) scale(0.7);
                    color: var(--color-black-3);
                    background-color: ${({ background }) =>
                        background ? `var(--color-${background})` : 'var(--color-grey-1)'};

                    @media ${device.tabletL} {
                        top: 9px;
                    }
                }
            `}
    }
`

const ErrorMessages = styled(Text)`
    padding-left: 0.8rem;
    padding-bottom: ${({ error_shift }) => (error_shift ? error_shift : 0)};
    font-size: 1.2rem;
    min-height: 16px;
`

const StyledLabel = styled.label<StyledLabelProps>`
    color: ${({ label_color }) =>
        label_color ? `var(--color-${label_color})` : 'var(--color-grey)'};
    font-size: var(--text-size-xs);
    position: absolute;
    pointer-events: none;
    left: 0.8rem;
    top: 1.4rem;
    transition: 0.25s ease transform;
    transform: translateZ(0);
    padding: 0 0.4rem;
    background: none;
`

const Input = ({
    label = '',
    height = '',
    border = '',
    error_shift = '',
    focus_border = '',
    label_hover_color,
    label_color = '',
    disabled,
    id = '',
    is_date,
    error = '',
    background = '',
    tablet_background = '',
    handleError,
    maxLength,
    setFieldValue,
    setFieldTouched,
    password_icon,
    ...props
}: InputProps) => {
    let current_input = useRef<HTMLInputElement>(null)
    const [is_password_visible, setPasswordVisible] = useState(false)

    useEffect(() => {
        if (current_input.current) {
            current_input.current.type = !is_password_visible && password_icon ? 'password' : 'text'
        }
    }, [is_password_visible])

    return (
        <RelativeWrapper>
            <InputWrapper
                border={border}
                focus_border={focus_border}
                label_hover_color={label_hover_color}
                disabled={disabled}
                error={error}
                className="input-wrapper"
            >
                {is_date ? (
                    <AffiliateDatePicker
                        id={id}
                        top_shift="1.5rem"
                        background={background}
                        maxLength={maxLength}
                        error={error}
                        disabled={disabled}
                        height={height}
                        label={label}
                        setFieldValue={setFieldValue}
                        setFieldTouched={setFieldTouched}
                        tablet_background={tablet_background}
                        htmlFor={id}
                        label_color={label_color}
                        {...props}
                        ref={(ip) => (current_input = ip)}
                    />
                ) : (
                    <StyledInput
                        id={id}
                        background={background}
                        maxLength={maxLength}
                        error={error}
                        disabled={disabled}
                        height={height}
                        showLabel={label}
                        {...props}
                        ref={(ip) => (current_input.current = ip)}
                    />
                )}
                {label && !is_date && (
                    <StyledLabel
                        tablet_background={tablet_background}
                        error={error}
                        htmlFor={id}
                        label_color={label_color}
                    >
                        {label}
                    </StyledLabel>
                )}
            </InputWrapper>
            <ErrorMessages lh="1.4" align="left" color="red-1" error_shift={error_shift}>
                {error}
            </ErrorMessages>
            {password_icon && (
                <StyledIcon
                    src={EyeIcon}
                    disabled={disabled}
                    password_icon={password_icon}
                    alt="eye icon"
                    onClick={() => (!disabled ? setPasswordVisible(!is_password_visible) : null)}
                />
            )}
            {error && (
                <StyledIcon
                    src={CrossIcon}
                    alt="error icon"
                    onClick={() => {
                        handleError(current_input)
                    }}
                />
            )}
        </RelativeWrapper>
    )
}

export default Input
