import { React, useState, } from 'react';
//test
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Flowpoint, Flowspace } from 'flowpoints';



const UnitList = ({ units }) => {
    const [formState] = useState({message: '' });
    const { message } = formState;

return (
        <div>
            <h5>
                Possible Relatives
            </h5>
            <Flowspace class= "flowspace">

                {/* first point */}
                <Flowpoint id="1member"
                    key="point_d"
                    outputs={{
                        "point_a": {
                            output: "auto",
                            input: "auto",
                            inputColor: "red"
                        },
                        "point_b": {
                            output: "right",
                            input: "left"
                        }
                    }}>                    <textarea name="message" rows="5" defaultValue={message} />

                    </Flowpoint>

                    {/* second point */}
                <Flowpoint id="2"
                    key="point_e"
                    outputs={{
                        "point_a": {
                            output: "auto",
                            input: "auto",
                            inputColor: "red"
                        },
                        "point_b": {
                            output: "right",
                            input: "left"
                        }
                    }}>                   
                    <textarea name="message" rows="5" defaultValue={message} />

                </Flowpoint>
                {/* third point */}
             
                    
                    
                <Flowpoint id="4"
                    key="point_f"
                    outputs={{
                        "point_a": {
                            output: "auto",
                            input: "auto",
                            inputColor: "red"
                        },
                        "point_b": {
                            output: "right",
                            input: "left"
                        }
                    }}>
                    <textarea name="message" rows="5" defaultValue={message} />

                </Flowpoint>
                {/* forth member */}
            <Flowpoint id="3"
                key="point_g"
                theme="indigo"
                variant="outlined"
                outputs={{
                    "point_d": {
                        output: "right",
                        input: "left",
                        outputColor: "#0c00ff",
                        inputColor: "#ff0022",
                        onClick: (key_a, key_b, e) => {
                            console.log('Click connection ' + key_a + ' -> ' + key_b)
                        }
                    }
                }}>  <textarea name="message" rows="5" defaultValue={message} /></Flowpoint>
{/*     Second Generation member A*/}
            <Flowpoint id="6"
                key="point_h"
                outputs={{
                    "point_g": {
                        output: "auto",
                        input: "auto",
                        inputColor: "red"
                    }
                }}>
                <textarea name="message" rows="5" defaultValue={message} />

            </Flowpoint>
            {/* Second Generation Member B */}
            <Flowpoint id="6"
                key="point_i"
                outputs={{
                    "point_e": {
                        output: "auto",
                        input: "auto",
                        inputColor: "red"
                    }
                }}>
                <textarea name="message" rows="5" defaultValue={message} />

            </Flowpoint>
            <Flowpoint id="6"
                key="point_j"
                outputs={{
                    "point_i": {
                        output: "auto",
                        input: "auto",
                        inputColor: "red"
                    },
                    "point_e": {
                        output: "auto",
                        input: "auto",
                        inputColor: "red"
                    }
                }}>
                <textarea name="message" rows="5" defaultValue={message} />

            </Flowpoint>

            {/* Mom and Dad */}
            <Flowpoint key="point_a" outputs={["point_c"]} id="5" >
                <label htmlFor="message">Mom:</label>


                <textarea name="message" rows="5" defaultValue={message} />


            </Flowpoint>
            <Flowpoint key="point_b" outputs={["point_c"]} id="6">
                <label htmlFor="message">Dad:</label>

                <textarea name="message" rows="8" defaultValue={message} />
            </Flowpoint>
            </Flowspace>


{/* /////////////////SECOND CHART //////////////////*/}
            <Flowspace>


                <Flowpoint key="point_a" outputs={["point_b"]}>
                    <textarea name="message" rows="5" defaultValue={message} />
                </Flowpoint>
                <Flowpoint key="point_b">
                    <textarea name="message" rows="5" defaultValue={message} />
                </Flowpoint>
                <Flowpoint key="point_c" outputs={["point_b"]}>
                    <textarea name="message" rows="5" defaultValue={message} />
                </Flowpoint>
                {/* first point */}
                <Flowpoint
                    key="point_d"
                    outputs={{
                        "point_a": {
                            output: "auto",
                            input: "auto",
                            inputColor: "red"
                        },
                        "point_b": {
                            output: "right",
                            input: "left"
                        }
                    }}>                    <textarea name="message" rows="5" defaultValue={message} />

                </Flowpoint>
                {/* second point */}
                <Flowpoint
                    key="point_e"
                    outputs={{
                        "point_a": {
                            output: "auto",
                            input: "auto",
                            inputColor: "red"
                        },
                        "point_b": {
                            output: "right",
                            input: "left"
                        }
                    }}>
                    <textarea name="message" rows="5" defaultValue={message} />

                </Flowpoint>
                {/* third point */}
                {/* <Flowpoint
                    key="point_"
                    theme="indigo"
                    variant="outlined"
                    outputs={{
                        "point_d": {
                            output: "right",
                            input: "left",
                            outputColor: "#0c00ff",
                            inputColor: "#ff0022",
                            onClick: (key_a, key_b, e) => {
                                console.log('Click connection ' + key_a + ' -> ' + key_b)
                            }
                        }
                    }}>  <textarea name="message" rows="5" defaultValue={message} /></Flowpoint>
                    
                     */}
                <Flowpoint
                    key="point_f"
                    outputs={{
                        "point_a": {
                            output: "auto",
                            input: "auto",
                            inputColor: "red"
                        },
                        "point_b": {
                            output: "right",
                            input: "left"
                        }
                    }}>
                    <textarea name="message" rows="5" defaultValue={message} />

                </Flowpoint>
            </Flowspace>
            

            {units.map(unit => (
                <button className="btn w-100 display-block mb-2" key={unit._id}>
                    <Link to={`/unit/${unit.firstName}`}>{unit.firstName}</Link>
                </button>
            ))}
        </div>
    );
};
export default UnitList;

