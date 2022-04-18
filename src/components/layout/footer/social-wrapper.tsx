import React from 'react'
import { SocialWrapper } from './common/style'
import { LocalizedLink } from 'components/localization'
import {
    fb_url_career,
    instagram_url_career,
    linkedin_url,
    linkedin_url_career,
} from 'common/constants'
//Logo
import Twitter from 'images/svg/layout/footer-twitter.svg'
import Instagram from 'images/svg/layout/footer-instagram.svg'
import Facebook from 'images/svg/layout/footer-facebook.svg'
import Linkedin from 'images/svg/layout/footer-linkedin.svg'

type SocialWrapperComponentProps = {
    fb_url?: string
    instagram_url?: string
    is_career_page?: boolean
    twitter_url?: string
}

type SocialMediaComponentProps = {
    social_accounts: {
        link?: string
        image?: string
        image_alt?: string
    }[]
}

const SocialWrapperComponent = ({
    is_career_page = false,
    fb_url = '',
    instagram_url = '',
    twitter_url = '',
}: SocialWrapperComponentProps) => {
    const alt_string = (is_career_page ? 'career' : '') + ' icon link'
    const accounts = [
        {
            link: is_career_page ? fb_url_career : fb_url,
            image: Facebook,
            image_alt: `facebook ${alt_string}`,
        },
        {
            link: is_career_page ? instagram_url_career : instagram_url,
            image: Instagram,
            image_alt: `instagram ${alt_string}`,
        },
        {
            link: is_career_page ? linkedin_url_career : linkedin_url,
            image: Linkedin,
            image_alt: `linkedin ${alt_string}`,
        },
    ]

    const twitter = {
        link: twitter_url,
        image: Twitter,
        image_alt: `twitter ${alt_string}`,
    }

    if (!is_career_page) {
        accounts.splice(1, 0, twitter)
    }

    return <SocialMediaComponent social_accounts={accounts} />
}

const SocialMediaComponent = ({ social_accounts = [] }: SocialMediaComponentProps) => (
    <SocialWrapper>
        {social_accounts.map((account, index) => (
            <LocalizedLink
                key={index}
                external="true"
                to={account.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={account.image} alt={account.image_alt} width="41" height="41" />
            </LocalizedLink>
        ))}
    </SocialWrapper>
)

export default SocialWrapperComponent
