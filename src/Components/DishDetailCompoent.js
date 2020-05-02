import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const dish = this.props.dish;
        if(dish!=null){
        return(
            <div className="row">
                <div className="col-12 col-sm-5">
                    <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                    <CardBody>
                    <CardTitle><strong>{dish.name}</strong></CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-sm-7">
                        <h4 className="ml-5"><strong>Comments</strong></h4>
                        <div>
                            {dish.comments.map((comment)=>
                            {
                                return(
                                    <li key={comment.id} className="list-unstyled ml-5">
                                        <p>{comment.comment}</p>
                                        <p>--{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                    </li>
                                )
                            })}
                        </div>
                </div>
            </div>
        );}
        else
        return <div></div>
    }
}

export default DishDetail;