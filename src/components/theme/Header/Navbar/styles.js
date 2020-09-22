import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.a`
  color: '#fff';

  @media (max-width: 960px) {
    mix-blend-mode: 'difference';
  }
`;

export const Logo = styled.span`
  vertical-align: middle;
  margin-right: 5px;

  img {
    margin: 0;
  }
`;
