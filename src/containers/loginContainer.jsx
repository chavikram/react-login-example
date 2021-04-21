import { connect } from 'react-redux';
import LoginPage from '../components/loginPage/loginPage';
import {loginAction} from '../services/actions/action'

const mapStateToProps= state => ({
    loginData: state.data
})
const mapDispatchToProps=dispatch=> ({
    callLoginAction:data=> dispatch(loginAction(data))

})

export default connect(mapStateToProps,mapDispatchToProps)(loginAction)
