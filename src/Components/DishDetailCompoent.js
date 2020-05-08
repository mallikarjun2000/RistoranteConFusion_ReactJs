import React from 'react';
import { Card, CardImg,  CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';
import { Loading } from './LoadingComponent';

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


class DishDetail extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const dish = this.props.dish;
        const comment = this.props.comment;
        if(this.props.isLoading)
        {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            )
        }
        else if( this.props.errMess ){
            return(
            <div className="container">
                    <div className="row">
                        <h4>{this.props.errMess}</h4>
                    </div>
            </div>
            )
        }
        else  if(dish!=null){
        return(
            <div className="container">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Dish Details</BreadcrumbItem>
                </Breadcrumb>
                <div className="row">
                <RenderDish dish={dish}/>
                <CommentForm comments={comment} 
                            addComment={this.props.addComment}
                            dishId={this.props.dish.id}/>
                </div>
            </div>
        );}
        else
        return <div></div>
    }
}

export default DishDetail;