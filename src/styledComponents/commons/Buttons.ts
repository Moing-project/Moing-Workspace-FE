import { styled, css } from "styled-components";
import { ButtonProps } from "../types/ButtonType";

const heights = { low: `32px`, medium: `42px`, high: `48px`, xlow: `24px` };
const widths = {
  short: `80px`,
  medium: `167px`,
  long: `368px`,
  xshort: `fit-content`,
};

const CustomBtn = styled.button<ButtonProps>`
  /* 버튼 공통 부분 */
  border-radius: 8px;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 166.667% */
  cursor: pointer;

  ${({ $shape, $status }) => {
    let status =
      $status === "active" ? "var(--keyColor-main)" : "var(--gray-05)";

    switch ($shape) {
      case "filled":
        return css`
          background: ${status};
          border: none;
          color: var(--gray-01);
        `;
      case "solid":
        return css`
          background: var(--gray-01);
          border: 1px solid ${status};
          color: ${status};
        `;
      default:
        return ``;
    }
  }};

  ${({ $height }) => {
    switch ($height) {
      case "low":
        return css`
          height: ${heights.low};
          font-size: 12px;
        `;
      case "medium":
        return css`
          height: ${heights.medium};
          font-size: 14px;
        `;
      case "high":
        return css`
          height: ${heights.high};
          font-size: 16px;
        `;
      case "xlow":
        return css`
          height: ${heights.xlow};
          font-size: 12px;
          font-weight: 400;
        `;
      default:
        return ``;
    }
  }};

  width: ${({ $width }) => {
    switch ($width) {
      case "short":
        return widths.short;
      case "medium":
        return widths.medium;
      case "long":
        return widths.long;
      case "xshort":
        return widths.xshort;
      default:
        return ``;
    }
  }};
`;

export const SubmitButton = styled(CustomBtn)<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ disabled }) =>
    disabled ? "var(--gray-05)" : "var(--keyColor-main)"};
`;

export { CustomBtn };
