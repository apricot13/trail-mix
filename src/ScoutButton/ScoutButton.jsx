import styled, {css} from "styled-components"

let styles = css`
    display: inline-block;
    text-decoration: none;
    color: ${props => props.theme.styles.link};
    padding: 15px 45px;
    text-align: center;
    border: 3px solid ${props => props.theme.styles.link};
    font-size: 1rem;
    background: none;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
    &:focus{
        outline: 3px solid ${props => props.theme.styles.focus}
    }
    &:hover{
        color: ${props => props.theme.styles.linkHover};
        border-color: ${props => props.theme.styles.linkHover}
    }
    &:active{
        color: ${props => props.theme.styles.linkActive};
        border-color: ${props => props.theme.styles.linkActive}
    }
    @media screen and (min-width: ${props => props.theme.styles.breakpointM}){
        width: inherit;
    }
    &:disabled{
        background: ${props => props.theme.styles.text};
        pointer-events: none;
        border-color: ${props => props.theme.styles.text};
    }
`

const solidStyle = css`
  background: ${props => props.theme.styles.link};
  color: ${props => props.theme.styles.white};
  &:hover {
    color: ${props => props.theme.styles.white};
    background: ${props => props.theme.styles.linkHover};
  }
  &:active {
    color: ${props => props.theme.styles.white};
    background: ${props => props.theme.styles.linkActive};
  }
`

const ScoutButton = styled.button`
  ${styles}
`

export default ScoutButton

export const SolidButton = styled(ScoutButton)`
  ${solidStyle}
`

export const ButtonLink = styled.a`
  ${styles}
`
export const SolidButtonLink = styled(ButtonLink)`
  ${solidStyle}
`

export const SolidButtonLinkPrimary = styled(ButtonLink)`
  color: ${props => props.theme.styles.primaryText};
  background: ${props => props.theme.styles.primary};
  border: 0;
  border-bottom: 4px solid ${props => props.theme.styles.primaryCompanion};
  &:hover {
    background: ${props => props.theme.styles.primaryHover};
    color: ${props => props.theme.styles.primaryHoverText};
    border-bottom: 4px solid ${props => props.theme.styles.primaryCompanion};
  }
  &:active {
    background: ${props => props.theme.styles.primaryHover};
    border-bottom: 0;
    border-top: 4px solid ${props => props.theme.styles.primaryCompanion};
  }
  &:focus {
    outline: none;
    background-color: ${props => props.theme.styles.focus};
    border-bottom: 4px solid ${props => props.theme.styles.primaryText};
    border-top: none;
    color: ${props => props.theme.styles.primaryText};
  }
`
