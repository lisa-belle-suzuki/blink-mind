import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  align-items: ${props => props.alignItems};
`;

export const Margin = styled.div`
  margin: ${props => props.margin};
`;

export const ShowMenuIcon = styled.a`
  font-size: 20px !important;
`;

export const IconBg = styled.div`
  padding: 5px;
  cursor: pointer;
`;

export const Btn = styled.div`
  cursor: pointer;
  &:hover {
    color: #1ea7fd;
  }
  &:focus {
    outline: none;
  }
`

export const CloseIcon = styled(Btn)`
  position: absolute;
  right: 5px;
  top: 5px;
`;

export const Title = styled.div`
  height: 16px;
`;

export const TopicBlockIcon = styled.span`
  margin: 0px 10px;
`;
