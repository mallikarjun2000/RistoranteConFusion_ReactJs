import React from 'react';
import { Card, CardImg,  CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({dish}){
    return(
    <div className="col-12 col-sm-5">
        <Card>
        <CardImg width="100%" object src={dish.image} alt={dish.name}/>
        <CardBody>
        <CardTitle><strong>{dish.name}</strong></CardTitle>
        <CardText>{dish.description}</CardText>
        </CardBody>
        </Card>
    </div>
    );
}

function RenderComment({comments}){
    return(
        <div className="col-12 col-sm-7">
            <h4 className="ml-5"><strong>Comments</strong></h4>
                <div>
                    {comments.map((comment)=>
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
    )
}


class DishDetail extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const dish = this.props.dish;
        const comment = this.props.comment;
        if(dish!=null){
        return(
            <div className="container">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Dish Details</BreadcrumbItem>
                </Breadcrumb>
                <div className="row">
                <RenderDish dish={dish}/>
                <RenderComment comments={comment}/>
                </div>
            </div>
        );}
        else
        return <div></div>
    }
}

export default DishDetail;