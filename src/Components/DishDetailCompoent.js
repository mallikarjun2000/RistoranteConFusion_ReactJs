import React from 'react';
import { Card, CardImg,  CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Col, Label, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control , LocalForm , Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len)

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

class RenderComment extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isModalOpen : false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        alert('current state is :' + JSON.stringify(values));
    }

    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }

    render(){
    const comments = this.props.comments;
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
                    <div className="row">
                        <button onClick={this.toggleModal} className="ml-5 btn btn-transparent"><span className="fa fa-pencil"> Submit Comment</span></button>
                    </div>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader className="row"> Submit Comment
                        </ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="row form-group">
                                    <Label className="form-control-label" md={12}>Rating</Label>
                                    <Col md={{size: 10, offset: 0}}>
                                    <Control.select model=".rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                    </Control.select>
                                </Col>
                                </Row>
                                <Row className="row form-group">
                                    <Label className="form-control-label" md={12}>Your Name</Label>
                                    <Col md={{size: 10, offset: 0}}>
                                    <Control.text model=".name" name="name"
                                        className="form-control" placeholder="Your Name"
                                        validators={{
                                            required, minLength:minLength(3), maxLength:maxLength(15)
                                        }}/>
                                        <Errors className="text-danger"
                                         model=".name"
                                         show="touched"
                                         messages={{
                                             required: 'Required',
                                             minLength: 'Must be greater that 2 charecters',
                                             maxLength: 'Must be 12 charecters or less'
                                         }}
                                         />
                                </Col>
                                </Row>
                                <Row className="row form-group">
                                    <Label className="form-control-label" md={12}>Comments</Label>
                                    <Col md={{size: 10, offset: 0}}>
                                    <Control.textarea model=".message" name="message"
                                    rows={9}
                                        className="form-control" placeholder="Enter Comments"/>
                                </Col>
                                </Row>
                                <Row className="form-group">
                                <Col md={{size:10, offset:0}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>
        </div>
        )
    }
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