import React, { useEffect } from 'react';
import ProductImageSlide from './ProductImageSlide';
import { useDispatch, useSelector } from 'react-redux';
import AppCard from '../../../@crema/core/AppCard';
import Header from './Header';
import ProductView from './ProductView/index';
import AppGridContainer from '../../../@crema/core/AppGridContainer';
import SimilarProduct from './SimilarProduct';

import { AppInfoView } from '../../../@crema';
import AppAnimate from '../../../@crema/core/AppAnimate';
import PropTypes from 'prop-types';
import { getProductDetail } from '../../../redux/actions';

const ProductDetail = (props) => {
  const dispatch = useDispatch();
  const currentProduct = useSelector(
    ({ ecommerce }) => ecommerce.currentProduct,
  );
  useEffect(() => {
    dispatch(getProductDetail(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  return (
    <>
      {currentProduct ? (
        <AppAnimate animation='transition.slideUpIn' delay={200}>
          <AppCard>
            <Header product={currentProduct} />
            <AppGridContainer>
              <ProductImageSlide product={currentProduct} />
              <ProductView product={currentProduct} />
            </AppGridContainer>
            <SimilarProduct />
          </AppCard>
        </AppAnimate>
      ) : null}
      <AppInfoView />
    </>
  );
};

export default ProductDetail;

ProductDetail.propTypes = {
  match: PropTypes.object,
};
