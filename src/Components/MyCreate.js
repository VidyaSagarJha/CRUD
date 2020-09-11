import React, { Component } from "react";
import axios from "axios";

class MyCreate extends Component {
    constructor(props){
        super(props)

        this.state = {
            name_prefix: '',
            first_name: '', 
            last_name: '', 
            gender: '', 
            birth_date: '', 
            birth_time: '', 
            birth_timezone: '',
            birth_country: '', 
            birth_region: '', 
            birth_city: '', 
            residence_country: '', 
            residence_region: '', 
            residence_city: '',
            residence_timezone: '', 
            dst_time: '',  
            diff_residence: ''


        }
    }

    changeHandler = e =>{
    console.log(e.target.name, e.target.value);
    this.setState( { [ e.target.name ] : e.target.value } )
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state);
        axios.post("http://ec2-13-126-190-182.ap-south-1.compute.amazonaws.com/api/v1/astrology/kundali/", this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error);
        })
    }
    

    

    render() {

        const { name_prefix,first_name, last_name, gender, birth_date, 
            birth_time, birth_timezone,birth_country, birth_region, 
            birth_city, residence_country, residence_region, residence_city,
            residence_timezone, dst_time,  diff_residence} = this.state;

        return (
            <div>
                
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label> Name prefix</label>
  
                        <select  name="name_prefix" value={name_prefix} onChange={this.changeHandler}>
                           <option value="Sir"  >Sir</option>
                            <option value="Smt."  >Smt.</option>
                            <option value="Mr."  >Mr.</option>
                            <option value="Mrs."  >Mrs.</option>
                            <option value="Ms."  >Ms.</option>
                            <option value="Dr."  >Dr.</option>
                        </select>
                    </div>

                    <div>
                            <label> First name</label>
                            <input name="first_name"  type="text"  value={first_name} onChange={this.changeHandler} />
                    </div>

                    <div>
                            <label> Last name</label>
                            <input name="last_name"  type="text"  value={last_name} onChange={this.changeHandler} />
                    </div>

                    <div>
                        <label>Gender </label>
                            <select name="gender" value={gender} onChange={this.changeHandler} >
                                    <option value="M"  >Male</option>
                                    <option value="F"  >Female</option>
                                    <option value="U"  >Unspcified</option>
                                </select>       
                    </div>

                    <div>
                        <label>Birth date</label>
                        <div >
                            <input name="birth_date" type="date"  value={birth_date}  onChange={this.changeHandler} />
                        </div>
                    </div>

                    <div>
                        <label>Birth time</label>
                        <div>
                            <input name="birth_time" type="time"  value={birth_time} onChange={this.changeHandler} /> 
                        </div>
                    </div>

                    <div>
                        <label>Birth timezone</label>
                        <div>
                            <input name="birth_timezone"  type="text"  value={birth_timezone} onChange={this.changeHandler} />  
                        </div>
                    </div>

                    <div>
                        <label>Birth country</label>
                        <div>
                            <select name="birth_country" value={birth_country} onChange={this.changeHandler} >
                                <option value="1149361"  >Afghanistan</option>
                                <option value="661882"  >Aland Islands</option>
                                <option value="783754"  >Albania</option>
                                <option value="2589581"  >Algeria</option>
                                <option value="1269750"  >India</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label>Birth region</label>
                        <div>
                            <select  name="birth_region" value={birth_region} onChange={this.changeHandler}>
                                <option value="3039162"  >Sant Julià de Loria</option>
                                <option value="3039676"  >Ordino</option>
                                <option value="3040131"  >La Massana</option>
                                <option value="3040684"  >Encamp</option>
                                <option value="3041203"  >Canillo</option>
                                <option value="3041566"  >Andorra la Vella</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label>Birth city</label>
                        <div>
                            <select name="birth_city" value={birth_city} onChange={this.changeHandler} >
                                <option value="10515180"  >Raswan</option>
                                <option value="10515181"  >Ailkar</option>
                                <option value="10515183"  >Bhalwāhi Rāja</option>
                                <option value="10515184"  >Urgāīn</option>
                                <option value="10515185"  >Kuran</option>
                                <option value="10515186"  >Belkhuri</option>
                                <option value="10515187"  >Bhadohi</option>
                            </select>
                        </div>
                    </div>
         

                    <div>
                        <label>Residence country</label>
                        <div>
                            <select  name="residence_country" value={residence_country} onChange={this.changeHandler} >
                                <option value="1149361"  >Afghanistan</option>
                                <option value="661882"  >Aland Islands</option>
                                <option value="783754"  >Albania</option>
                                <option value="2589581"  >Algeria</option>
                                <option value="5880801"  >American Samoa</option>
                                <option value="3041565"  >Andorra</option>
                                <option value="3351879"  >Angola</option>
                                 <option value="3573511"  >Anguilla</option>
                                <option value="6697173"  >Antarctica</option>
                                <option value="3576396"  >Antigua and Barbuda</option>
                            </select>
                        </div>
                    </div>



                    <div>
  
                        <label>Residence region</label>
                        <div>
                            <select  name="residence_region" value={residence_region} onChange={this.changeHandler}>
                                <option value="3039162"  >Sant Julià de Loria</option>
                                <option value="3039676"  >Ordino</option>
                                <option value="3040131"  >La Massana</option>
                                <option value="3040684"  >Encamp</option>
                                <option value="3041203"  >Canillo</option>
                                </select>
                        </div>
                    </div>


                    <div>
                        <label>Residence city</label>
                        <div>
                            <select name="residence_city" value={residence_city} onChange={this.changeHandler} > 
                                <option value="10516349"  >Kuldihwa</option>
                                <option value="10516350"  >Dumra</option>
                                <option value="10516351"  >Khempur</option>
                                <option value="10516352"  >Longa</option>
                                <option value="10516353"  >Chhatarkhariya</option>
                                <option value="10516354"  >Jhariya</option>
                                <option value="10516355"  >Mahīuddīnpur</option>
                                <option value="10516356"  >Dewātan</option>
                                <option value="10516357"  >Shivpur</option>
                                <option value="10516358"  >Khetkatwa</option>
                                </select>
                        </div>
                    </div>



                    <div>
                        <label>Residence timezone</label>
                        <div>
                            <input name="residence_timezone"  type="text"  value={residence_timezone} onChange={this.changeHandler} />
                        </div>
                    </div>
  

                    <div>
                        <label>Diff residence</label>
                        <div>
                            <input type="checkbox" name="diff_residence" value="true" onChange={this.changeHandler}/>
                        </div>
                    </div>

                    <div>
                        <label >Dst time</label>
                        <div>
                            <input type="checkbox" name="dst_time" value="true" onChange={this.changeHandler}/>
                        </div>
                    </div>

                    <div>
                        <button type="submit">Post</button>
                    </div>

                </form>

            </div>
        );

    }

}
export default MyCreate;