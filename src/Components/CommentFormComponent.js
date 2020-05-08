import React from 'react';
import { Control , LocalForm , Errors } from 'react-redux-form';
import { Modal, ModalHeader, ModalBody, Col, Label, Row, Button } from 'reactstrap';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len)

class CommentForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isModalOpen : false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        this.props.addComment(this.props.dishId,values.rating, values.author, values.comment)
        //alert('current state is :' + JSON.stringify(values));
    }

    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }

    render(){
    const comments = this.props.comments;
    const addComments = this.props.addComments;
    const dishId = this.props.dishId;
    return(
        <div className="col-12 col-sm-7 offset-1">
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
                                    <Control.text model=".author" name="author"
                                        className="form-control" placeholder="Your Name"
                                        validators={{
                                            required, minLength:minLength(3), maxLength:maxLength(15)
                                        }}/>
                                        <Errors className="text-danger"
                                         model=".author"
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
                                    <Control.textarea model=".comment" name="comment"
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

export default CommentForm;