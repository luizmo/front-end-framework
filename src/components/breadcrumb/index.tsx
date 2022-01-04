import React from 'react';
import { BreadCrumbContainer } from './styles';

interface BreadCrumbProps {
  crumbs: React.ReactElement[];
}

const Breadcrumb: React.FC<BreadCrumbProps> = ({ crumbs }) => {
  return(
    <BreadCrumbContainer>
      {crumbs && crumbs.length && (
        crumbs.map((crumb, index) => ({ ...crumb, key: index }))
      )}
    </BreadCrumbContainer>
  );
}

export default Breadcrumb;


