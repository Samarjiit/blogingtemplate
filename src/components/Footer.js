import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.secondary};
  padding: 1em 0 2em;
  margin: 0 1.5em;
`

const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: auto;
  }
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.text};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    &:visited {
      color: ${props => props.theme.colors.text};
    }
  }
`

const Footer = () => (
  <Wrapper>
    <List>
      <Item>
        <a
          href="https://www.facebook.com/HPlumbers/"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <img
            src="/images/fb.svg"
            style={{ width: '50px' }}
            alt="Powered by HPlumber"
          />
        
        </a> 
      </Item>&nbsp;
    
      <Item>
        <a
          href="https://twitter.com/hplumbers1"
          target="_blank"
          rel="noopener noreferrer"
        >
           <img
            src="/images/twitter.svg"
            style={{ width: '50px' }}
            alt="Powered by HPlumber"
          />
           
        </a>
       
      </Item>&nbsp;
      <Item>
        <a
          href="https://www.instagram.com/hplumbers/"
          target="_blank"
          rel="noopener noreferrer"
        >
           <img
            src="/images/insta.svg"
            style={{ width: '50px' }}
            alt="Powered by HPlumber"
          />
           
        </a>
       
      </Item>&nbsp;
      <Item>
        <a
          href="https://www.linkedin.com/company/hplumbers"
          target="_blank"
          rel="noopener noreferrer"
        >
           <img
            src="/images/linkedin.svg"
            style={{ width: '55px' }}
            alt="Powered by HPlumber"
          />
           
        </a>
       
      </Item>

      
    </List>
  </Wrapper>
)

export default Footer
