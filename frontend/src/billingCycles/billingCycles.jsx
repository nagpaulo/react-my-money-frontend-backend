import React, { Component } from 'react';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';


class BillingCycle extends Component {
    render(){
        return (
            <div>
                <ContentHeader title="BillingCycle" small="Versão 1.0"/>
                <Content>
                    BillingCycle
                </Content>
            </div>
        )
    }
}

export default BillingCycle;