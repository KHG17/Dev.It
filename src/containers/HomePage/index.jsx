import React from 'react';
import styled from 'styled-components';
import { TopSection } from './topSection';
import {PageContainer, InnerPageContainer} from '../../components/pageContainer/index';
import { Navbar } from '../../components/navbar';
import { deviceSize } from '../../components/responsive';
import { Services } from './services';
import { Marginer } from '../../components/marginer';
import { SpecialistAd } from '../../components/specialistAd';
import { Footer } from '../../components/footer';

const ContentContainer = styled.div`
    width: 100%;
    max-width: ${deviceSize.laptop}px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1em;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        padding: 5px;
    }
`;

export function HomePage(props) {
    return (
    <PageContainer>
        <TopSection>
            <Navbar useTransparent />
        </TopSection>
        <InnerPageContainer>
            <Marginer direction='vertical' margin='2em' />
            <ContentContainer>
                <Services />
            </ContentContainer>
            <Marginer direction='vertical' margin='5em' />
            <SpecialistAd />
            <Marginer direction='vertical' margin='5em' />
        </InnerPageContainer>
        <Footer />
    </PageContainer>
    );
}