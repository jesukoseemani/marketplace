import styled from 'styled-components';
import Image from 'next/image'
import logo from "../assets/img/MART.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router'

function Header() {
  const router = useRouter()
  return (
    <StyledHeader>
      <div className="back_button" onClick={() => router.back()}>
       <p>Back</p>
      </div>

      <div className="wrapper">

        <div className="input_search">
         <input className="input" type="text" placeholder="Search Items..." />
         <div className="icon">
           <FontAwesomeIcon className="box_icon" icon={faSearch} size="2x" /> 
         </div>
         
        </div>

        <div className="language_option">
        <select className="language_selection">
        <option value="English">English</option> 
        <option value="French">French</option>      
        <option value="Spanish">Spanish</option>       
        <option value="German">German</option>
        </select>
        </div>

        <div className="marketplace_logo">
        <Image
        src={logo}
        alt="company logo"
        // width={800}
        // height={800}
        objectFit="contain"
        />
        {/* MARKETPLACE */}
        </div>
          

      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 5rem;
padding: 0 3rem;
margin-top: 3rem;

.back_button{
 /* border: 1px solid transparent; */
 padding: 1rem;
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
 background-color: white;
 outline: none;
 border-radius: .8rem;
 margin-left: 2rem;
 
 p{
   font-size: 1.4rem;
 }
}

.wrapper{
  flex-basis: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;

 .input_search{
    position: relative;

 .input{
 padding: 1rem;
 padding-left: 4rem;
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
 background-color: white;
 outline: none;
 border: none;
 border-radius: .8rem;

 &::placeholder{
   /* padding-left: 2rem; */
   font-size: 1.15rem;
 }
  }

.icon{
    position: absolute;
    top: .8rem;
    left: .5rem;
    font-size: 1rem;
    .box_icon{
    color:#FF9900; 
    }
  }
 }

 .language_option{
  margin-left: .5rem;
  
  .language_selection{
  outline: none;
  border:none;
  background-color: #ffffff;
  }
 }

 .marketplace_logo{
 margin-left: 1.5rem
 }
}


`


export default Header
