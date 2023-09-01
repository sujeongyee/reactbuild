import { useEffect, useState } from 'react';
import './Login_join.css'
import { Link } from 'react-router-dom';

function Login_join() {
    useEffect(() => {
        setTimeout(() => {
            const container = document.getElementById('container');
            container.classList.toggle('sign-in');

        }, 200)
    }, [])

    const toggle = () => {
        const container = document.getElementById('container');
        container.classList.toggle('sign-in');
        container.classList.toggle('sign-up');
    };

    const idSearch = () => {
        const searchId = document.getElementById('seachId');
        const searchPw = document.getElementById('seachPw');
        const singIn = document.getElementById('singIn');
        searchId.style.transform = 'scale(1)'
        searchPw.style.transform = 'scale(0)';
        singIn.style.transform = 'scale(0)';
        singIn.style.transition = '.7s ease-in-out';
        searchId.style.transition = '.7s ease-in-out';
        searchPw.style.transition = '.7s ease-in-out';
    }
    const CheckLogin = () => {
        const searchId = document.getElementById('seachId');
        const seachPw = document.getElementById('seachPw');
        const singIn = document.getElementById('singIn');
        const pwView = document.querySelector('.pwReset');
        const searchPw = document.querySelector('.searchPw');
        searchPw.classList.toggle('pwView')
        pwView.classList.toggle('pwView')
        singIn.style.transform = 'scale(1)';
        searchId.style.transform = 'scale(0)'
        seachPw.style.transform = 'scale(0)';
        
        seachPw.style.height = "400px";

        singIn.style.transition = '.7s ease-in-out';
        searchId.style.transition = '.7s ease-in-out';
        seachPw.style.transition = '.7s ease-in-out';
    }

    const pwSearch = () => {
        const searchId = document.getElementById('seachId');
        const searchPw = document.getElementById('seachPw');
        const singIn = document.getElementById('singIn');
        searchId.style.transform = 'scale(0)';
        singIn.style.transform = 'scale(0)';
        searchPw.style.transform = 'scale(1)';
        singIn.style.transition = '.7s ease-in-out';
        searchId.style.transition = '.7s ease-in-out';
        searchPw.style.transition = '.7s ease-in-out';
    }

    const pwReset = () => {
        const seachPw = document.getElementById('seachPw');
        const pwView = document.querySelector('.pwReset');
        const searchPw = document.querySelector('.searchPw');

        pwView.classList.toggle('pwView')
        searchPw.classList.toggle('pwView')
        seachPw.style.height = "250px";
        seachPw.style.transition = '.3s ease-in-out';
    }
    return (
        <>

            <div id="container" className="container1">

                <div className="row logjoin">

                    <div className="col align-items-center flex-col sign-up">
                        <div className="form-wrapper align-items-center">
                            <div className="form sign-up">
                                <div className="lj_input-group">
                                    <i className='bx bx-mail-send'></i>
                                    <div className="input-button-wrapper" style={{ display: 'flex', textAlign: 'center', alignItems: 'center' }}>
                                        <input type="text" placeholder="아이디" />
                                        <input type="button" value="중복확인" className="button_check"
                                            style={{ marginLeft: '7px', color: '#757575', width: 'calc(45%)', border: '1px solid #757575', textAlign: 'center', fontWeight: '800', height: '44px', lineHeight: '10px' }} />
                                    </div>
                                </div>
                                <div className="lj_input-group">
                                    <i className='bx bxs-lock-alt'></i>
                                    <input type="password" placeholder="비밀번호" />
                                </div>
                                <div className="lj_input-group">
                                    <i className='bx bxs-lock-alt'></i>
                                    <input type="password" placeholder="비밀번호 확인" />
                                </div>
                                <div className="lj_input-group">
                                    <i className='bx bx-mail-send'></i>
                                    <input type="text" className="corporate_name" placeholder="회사명" />
                                </div>
                                <div className="lj_input-group">
                                    <i className='bx bx-mail-send'></i>
                                    <input type="text" className="ceo_name" placeholder="대표명" />
                                </div>
                                <div className="lj_input-group">
                                    <i className='bx bx-mail-send'></i>
                                    <div className="input-button-wrapper" style={{ display: 'flex', textAlign: 'center', alignItems: 'center' }}>
                                        <input type="text" className="business_registration_number" placeholder="사업자등록번호" />
                                        <input type="button" value="인증하기" className="button_check"
                                            style={{ marginLeft: '5px', color: '#757575', width: 'calc(45%)', border: '1px solid #757575', textAlign: 'center', fontWeight: '800', height: '44px', lineHeight: '10px' }} />
                                    </div>
                                </div>
                                <div className="lj_input-group">
                                    <i className='bx bx-mail-send'></i>
                                    <input type="tel" className="company_contactnumber" placeholder="회사 연락처" />
                                </div>
                                <div className="lj_input-group">
                                    <i className='bx bx-mail-send'></i>
                                    <input type="text" className="company_address" placeholder="회사주소" />
                                </div>
                                <div className="lj_input-group">
                                    <i className='bx bx-mail-send'></i>
                                    <input type="text" className="contact_name" placeholder="담당자 이름" />
                                </div>
                                <div className="lj_input-group">
                                    <i className='bx bx-mail-send'></i>
                                    <input type="email" className="contact_email" placeholder="담당자 이메일" />
                                </div>
                                <div className="lj_input-group">
                                    <i className='bx bx-mail-send'></i>
                                    <input type="tel" className="contact_phonenumber" placeholder="담당자 연락처" />
                                </div>
                                <button style={{ color: 'white' }}>
                                    가입하기
                                </button>
                                <p>
                                    <span>
                                        이미 계정이 있으신가요?
                                    </span>
                                    <b onClick={toggle} className="pointer">
                                        로그인하러가기
                                    </b>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col align-items-center flex-col sign-in">
                        <div className="form-wrapper align-items-center">
                            <div className="form sign-in" id="singIn">
                                <div className="lj_input-group">
                                    <i className='bx bxs-user'></i>
                                    <input type="text" placeholder="아이디" />
                                </div>
                                <div className="lj_input-group">
                                    <i className='bx bxs-lock-alt'></i>
                                    <input type="password" placeholder="비밀번호" />
                                </div>
                                <button style={{ color: 'white' }}>
                                    <Link to="" style={{}}>
                                    로그인하기
                                    </Link>
                                </button>
                                <p>
                                    <b onClick={idSearch} className="pointer" style={{ marginLeft: '10px' }}>
                                        아이디 찾기
                                    </b>
                                    <b onClick={pwSearch} className="pointer" style={{ marginLeft: '15px' }}>
                                        비밀번호 찾기
                                    </b>
                                </p>
                                <p>
                                    <span>
                                        계정이 없으신가요?
                                    </span>
                                    <b onClick={toggle} className="pointer" >
                                        가입하러가기
                                    </b>
                                </p>
                            </div>
                            <div className="form sign-in" id="seachId">
                                <div className="lj_input-group">
                                    <i className='bx bxs-user'></i>
                                    <input type="text" placeholder="관리자 이름" />
                                </div>
                                <div className="lj_input-group">
                                    <div className="row">
                                        <input type="email" className="serEmail" placeholder="관리자 이메일" />
                                        <button className="emailCheck">인증번호 받기</button>
                                    </div>
                                </div>
                                <div className="lj_input-group">
                                    <i className='bx bxs-user'></i>
                                    <input type="text" placeholder="인증번호 입력" />
                                </div>
                                <button style={{ color: 'white' }}>
                                    아이디 찾기
                                </button>
                                <div className="lj_input-group">
                                    <p>인증번호를 입력하세요</p>
                                </div>
                                <p>
                                    <b onClick={CheckLogin} className="pointer" style={{ marginLeft: '10px' }}>
                                        로그인 하기
                                    </b>
                                    <b onClick={pwSearch} className="pointer" style={{ marginLeft: '15px' }}>
                                        비밀번호 찾기
                                    </b>
                                </p>

                            </div>
                            <div className="form sign-in" id="seachPw">
                                <span className="searchPw">
                                    <div className="lj_input-group">
                                        <i className='bx bxs-user'></i>
                                        <input type="text" placeholder="아이디를 입력하세요" />
                                    </div>

                                    <div className="lj_input-group">
                                        <i className='bx bxs-user'></i>
                                        <input type="text" placeholder="사업자 번호를 입력하세요" />
                                    </div>
                                    <div className="lj_input-group">
                                        <div className="row">
                                            <input type="email" className="serEmail" placeholder="이메일을 입력하세요" />
                                            <button className="emailCheck">인증번호 받기</button>
                                        </div>
                                    </div>
                                    <div className="lj_input-group">
                                        <i className='bx bxs-user'></i>
                                        <input type="text" placeholder="인증번호 입력" />
                                    </div>
                                    <button style={{ color: 'white' }} onClick={pwReset}>
                                        확인
                                    </button>
                                <p>
                                    <b onClick={CheckLogin} className="pointer" style={{ marginLeft: '10px' }}>
                                        로그인 하기
                                    </b>
                                    <b onClick={idSearch} className="pointer" style={{ marginLeft: '15px' }}>
                                        아이디 찾기
                                    </b>
                                </p>
                                </span>
                                <div className="pwView pwReset">
                                    <div className="lj_input-group">
                                        <input type="text" placeholder="비밀번호 입력" />
                                    </div>
                                    <div className="lj_input-group">
                                        <input type="text" placeholder="비밀번호 재입력" />
                                    </div>
                                    <button style={{ color: 'white' }} onClick={CheckLogin}>
                                        비밀번호 재설정 하기
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div className="form-wrapper">
                        </div>
                    </div>
                </div>

                <div className="row logjoin content-row">
                    <div className="col align-items-center flex-col">
                        <div className="text sign-in">
                            <h2 style={{ color: 'white' }}>
                                Welcome
                            </h2>
                        </div>
                        <div className="img sign-in">
                        </div>
                    </div>

                    <div className="col align-items-center flex-col">
                        <div className="img sign-up">
                        </div>
                        <div className="text sign-up">
                            <h2 style={{ color: 'white' }}>
                                가입하기
                            </h2>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}
export default Login_join;