import React from 'react'
import httpClient from './httpClient'

class LogIn extends React.Component {
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
        const  storedUser = JSON.parse(localStorage.getItem('userInfo'))
		const userEmail = storedUser?.email;
		const userPassword = storedUser?.password;
		if(userEmail === undefined) return alert('User does not exist!')
		if((userEmail !== this.state.fields.email) || (userPassword !== this.state.fields.password)) return alert('Invalid credentials')
		httpClient.logIn(this.state.fields)
			this.setState({ fields: { email: '', password: '' } })
		window.location.reload()
		// 	if(user) {
		// 		this.props.onLoginSuccess(user)
		// 		this.props.history.push('/')
		// 	}
		// })
	}

	render() {
		const { email, password } = this.state.fields
		return (
			<div className='LogIn'>
				<div className='row'>
					<div className='column column-33 column-offset-33'>
						<h1>Log In</h1>
						<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
							<input type="text" placeholder="Email" name="email" value={email} />
                            <br></br>
							<input type="password" placeholder="Password" name="password" value={password} />
                            <br></br>
                            <button>Log In</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default LogIn;