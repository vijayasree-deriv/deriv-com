import React from 'react'
import PropTypes from 'prop-types'
import {
    DisclaimerWrapper,
    DisclaimerParagraph,
    StaticAsset,
    RiskWarning,
    BoldLink,
} from './common/style'
import { Mobile, Desktop, UKEU, ROW } from 'components/containers'
import { Localize, localize } from 'components/localization'
import { loss_percent } from 'common/constants'

const DisclaimerSection = ({ is_academy }) => {
    return (
        <>
            <DisclaimerWrapper>
                <ROW>
                    <DisclaimerParagraph>
                        <Localize
                            translate_text="In the EU, financial products are offered by Deriv Investments (Europe) Limited, W Business Centre, Level 3, Triq Dun Karm, Birkirkara BKR 9033, Malta, licensed as a Category 3 Investment Services provider by the Malta Financial Services Authority (<0>licence no. IS/70156</0>)."
                            components={[
                                <StaticAsset
                                    key={0}
                                    target="_blank"
                                    href="/regulatory/Deriv_Investments_(Europe)_Limited.pdf"
                                    rel="noopener noreferrer"
                                />,
                            ]}
                        />
                    </DisclaimerParagraph>
                    <DisclaimerParagraph>
                        <Localize
                            translate_text="Outside the EU, financial products are offered by the following companies: Deriv (FX) Ltd, F16, Level 1, Paragon Labuan, Jalan Tun Mustapha, 87000 Labuan, Malaysia, licensed by Labuan Financial Services Authority (<0>licence no. MB/18/0024</0>); Deriv (BVI) Ltd, Kingston Chambers, P.O. Box 173, Road Town, Tortola, British Virgin Islands, licensed by the British Virgin Islands Financial Services Commission (<1>licence no. SIBA/L/18/1114</1>); Deriv (V) Ltd (<2>view licence</2>), 1276, Kumul Highway, Port Vila, Vanuatu, licensed and regulated by the Vanuatu Financial Services Commission; and Deriv (SVG) LLC, Hinds Buildings, Kingstown, St. Vincent and the Grenadines."
                            components={[
                                <StaticAsset
                                    key={0}
                                    target="_blank"
                                    href="/regulatory/Deriv_(FX)_Ltd.pdf"
                                    rel="noopener noreferrer"
                                />,
                                <StaticAsset
                                    key={1}
                                    target="_blank"
                                    href="/regulatory/Deriv_(BVI)_Ltd.pdf"
                                    rel="noopener noreferrer"
                                />,
                                <StaticAsset
                                    key={2}
                                    target="_blank"
                                    href="/regulatory/Deriv_(V)_Ltd.pdf"
                                    rel="noopener noreferrer"
                                />,
                            ]}
                        />
                    </DisclaimerParagraph>
                </ROW>
                <UKEU>
                    <DisclaimerParagraph>
                        <Localize
                            translate_text="Deriv Investments (Europe) Limited, W Business Centre, Level 3, Triq Dun Karm, Birkirkara BKR 9033, Malta, is licensed in Malta (<0>licence no. IS/70156</0>) and regulated by the Malta Financial Services Authority under the Investments Services Act to provide investment services in the European Union. It is also authorised and subject to limited regulation by the Financial Conduct Authority in the UK. Details about the extent of our authorisation and regulation by the Financial Conduct Authority are available from us on request."
                            components={[
                                <StaticAsset
                                    key={0}
                                    target="_blank"
                                    href="/regulatory/Deriv_Investments_(Europe)_Limited.pdf"
                                    rel="noopener noreferrer"
                                />,
                            ]}
                        />
                    </DisclaimerParagraph>
                </UKEU>
                <DisclaimerParagraph>
                    {localize(
                        'Deriv Limited - 13 Castle Street, St. Helier, JE2 3BT, Jersey - is the holding company for the above subsidiaries.',
                    )}
                </DisclaimerParagraph>
                <DisclaimerParagraph>
                    {localize(
                        "This website's services are not available in certain countries, including the USA, Canada, and Hong Kong, or to persons below 18.",
                    )}
                </DisclaimerParagraph>
                {is_academy && (
                    <DisclaimerParagraph>
                        {localize(
                            'The information contained in this academy is for educational purposes only and is not intended as financial or investment advice.',
                        )}
                    </DisclaimerParagraph>
                )}
                <RiskWarning>
                    <Desktop>
                        <ROW>
                            <DisclaimerParagraph no_margin>
                                <Localize translate_text="CFDs are considered complex derivatives and may not be suitable for retail clients. CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. The products mentioned here may be affected by changes in currency exchange rates. If you invest in these products, you may lose some or all of your investment, and the value of your investment may fluctuate. You should never invest money that you cannot afford to lose and never trade with borrowed money." />
                            </DisclaimerParagraph>
                            <DisclaimerParagraph>
                                <Localize
                                    translate_text="Before trading in the complex financial products offered, please be sure to understand the risks involved and learn about <0>Secure and responsible trading</0>."
                                    components={[
                                        <BoldLink key={0} target="_blank" to="/responsible/" />,
                                    ]}
                                />
                            </DisclaimerParagraph>
                        </ROW>
                        <UKEU>
                            <DisclaimerParagraph no_margin>
                                <Localize translate_text="CFDs are considered complex derivatives and may not be suitable for retail clients." />
                            </DisclaimerParagraph>
                            <DisclaimerParagraph>
                                <Localize
                                    translate_text="CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. {{loss_percent}}% of retail investor accounts lose money when trading CFDs with this provider. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money."
                                    values={{ loss_percent }}
                                />
                            </DisclaimerParagraph>
                            <DisclaimerParagraph>
                                <Localize translate_text="The products mentioned here may be affected by changes in currency exchange rates. If you invest in these products, you may lose some or all of your investment and the value of your investment may fluctuate. You should never invest money that you cannot afford to lose and never trade with borrowed money." />
                            </DisclaimerParagraph>
                        </UKEU>
                    </Desktop>
                    <Mobile>
                        <UKEU>
                            <DisclaimerParagraph no_margin line_height>
                                <Localize translate_text="CFDs are considered complex derivatives and may not be suitable for retail clients." />
                            </DisclaimerParagraph>
                            <DisclaimerParagraph line_height>
                                <Localize
                                    translate_text="CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. {{loss_percent}}% of retail investor accounts lose money when trading CFDs with this provider. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money."
                                    values={{ loss_percent }}
                                />
                            </DisclaimerParagraph>
                            <DisclaimerParagraph line_height>
                                <Localize translate_text="The products mentioned here may be affected by changes in currency exchange rates. If you invest in these products, you may lose some or all of your investment and the value of your investment may fluctuate. You should never invest money that you cannot afford to lose and never trade with borrowed money." />
                            </DisclaimerParagraph>
                        </UKEU>
                        <ROW>
                            <DisclaimerParagraph no_margin>
                                <Localize translate_text="CFDs are considered complex derivatives and may not be suitable for retail clients. CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. The products mentioned here may be affected by changes in currency exchange rates. If you invest in these products, you may lose some or all of your investment, and the value of your investment may fluctuate. You should never invest money that you cannot afford to lose and never trade with borrowed money." />
                            </DisclaimerParagraph>
                            <DisclaimerParagraph>
                                <Localize
                                    translate_text="Before trading in the complex financial products offered, please be sure to understand the risks involved and learn about <0>Secure and responsible trading</0>."
                                    components={[
                                        <BoldLink key={0} target="_blank" to="/responsible/" />,
                                    ]}
                                />
                            </DisclaimerParagraph>
                        </ROW>
                    </Mobile>
                </RiskWarning>
            </DisclaimerWrapper>
        </>
    )
}

DisclaimerSection.propTypes = {
    is_academy: PropTypes.bool,
}

export default DisclaimerSection
