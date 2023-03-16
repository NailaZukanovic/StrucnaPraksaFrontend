import React from 'react'
import httpClient from './httpClient'

// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class SignUp extends React.Component {
    state = {
        fields: { email: '', password: ''}
    }

    onInputChange(evt) {
        this.setState({
            fields: {
                ...this.state.fields,
                [evt.target.name]: evt.target.value
            }
        })
    }

    onFormSubmit(evt) {
        evt.preventDefault()
        const emailRegex = /\S+@\S+\.\S+/;
        const textValidation = /[A-Za-z0-9'\.\-\s\,]/;
        if (!emailRegex.test(this.state.fields.email)) {
            return alert('Invalid email address')
        
        }else if (!textValidation.test(this.state.fields.password)){
            return alert('Invalid password')
        }
        httpClient.signUp(this.state.fields)
        	this.setState({ fields: { email: '', password: ''} })


        // 	if(user) {
        // 		this.props.onSignUpSuccess(user)
        // 		this.props.history.push('/')
        // 	}
        // })
    }

    render() {
        const { email, password} = this.state.fields
        return (
            <div className='SignUp'>
                <div className='row'>
                    <div className='column column-33 column-offset-33'>
                        <h1>Sign Up</h1>
                        <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                            <input type="email" placeholder="Email" name="email" value={email}/>
                            <br></br>
                            <input type="password" placeholder="Password" name="password" value={password}/>
                            <button>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;