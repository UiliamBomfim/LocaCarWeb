import { React } from "react";

const ContentContainer = (props) => {

    document.title = props.title;

    return (
        <div className="contentContainer container pt-5 pb-5 mt-5">
            <h2 className="text-center mb-5">{props.title}</h2>
            <div className="col-md-8 offset-md-2">
                {props.children}
            </div>
        </div>
    )
}

export default ContentContainer;