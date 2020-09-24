import styled from 'styled-components';

export const Text = styled.p``;

export const TitleText = styled.p`
  font-size: 2.4rem;
  line-height: 3.2rem;
  font-weight: 400;
  text-align: center;
  letter-spacing: -0.2px;
  color: #1b31a8;
  margin-bottom: 40px;

  @media all and (max-width: 768px) {
    font-size: 1.8rem;
    line-height: 2.6rem;
    margin-bottom: 24px;
  }
`;

export const LabelText = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 3rem;

  color: #1c1e1f;
`;

export const PrimaryText = styled.p`
  font-weight: 600;
  font-size: 3.2rem;
  line-height: 4rem;
  letter-spacing: -0.266667px;

  color: #1c1e1f;

  @media all and (max-width: 768px) {
    font-size: 2.4rem;
    line-height: 3.2rem;
  }
`;

export const SecondaryText = styled.p`
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 2rem;

  color: #657786;

  @media all and (max-width: 768px) {
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;

export const BoldText = styled.span`
  font-weight: 600 !important;
`;

export const BlockWhenMobile = styled.span`
  @media all and (max-width: 768px) {
    display: none;
  }
`;

export const DateSelectionPrimaryText = styled.span`
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.4rem;
  text-align: center;
  letter-spacing: -0.16px;
  color: #1c1e1f;
`;

export const DateSelectionSecondaryText = styled.span`
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #1c1e1f;
`;
