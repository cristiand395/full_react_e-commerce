import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import SHOP_DATA from './shop.data'

class ShopPâge extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherColletionsProps}) => (
                        <CollectionPreview  key={id}
                                            {...otherColletionsProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPâge