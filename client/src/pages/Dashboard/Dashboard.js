import React from 'react';
import { Flowpoint, Flowspace } from 'flowpoints';

<Flowspace>
  {/* <Flowpoint key="point_a" outputs={["point_b"]}>
                    Start Here typing in Family Information
                </Flowpoint>
                <Flowpoint key="point_b">
                    Another Family Member
                </Flowpoint> */}
  <Flowpoint
    key="point_a"
    outputs={{
      "point_b": {
        output: "auto",
        input: "auto",
        inputColor: "red"
      },
      "point_": {
        output: "right",
        input: "left"
      }
    }}>Hello World!</Flowpoint>
</Flowspace>