import React from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import routeConfig from "./routeConfig";

//image
import breacumbImage from "../../assets/images/breadcum.jpg";
//scss
import "./BreadcumbArea.scss";

const BreadcumbArea = () => {
  const breadcrumbs = useBreadcrumbs(routeConfig);
  return (
    <div className="breadcumbArea">
      <img src={breacumbImage} alt="breadcumb-image" />

      <div className="breadcumbArea__content">
        <div className="breadcumbArea__title container">
          <div className="breadcumbArea__link">
            <>
              {breadcrumbs.map(({ match, breadcrumb, className }, index) => (
                <span key={match.pathname}>
                  <Link to={match.pathname} className={className || null}>
                    {breadcrumb}
                  </Link>
                  {index < breadcrumbs.length - 1 && "/"}
                </span>
              ))}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadcumbArea;
