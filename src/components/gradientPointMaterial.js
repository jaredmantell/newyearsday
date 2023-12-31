import { extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'glslify';

export const GradientPointMaterial = shaderMaterial(
  { color1: '#c850c0', color2: '#ffcc70' },
  glsl`
    varying vec3 vColor;
    void main() {
      vColor = mix(vec3(1.0, 0.33, 0.64), vec3(1.0, 0.8, 0.44), position.y);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = 6.0;
    }
  `,
  glsl`
    varying vec3 vColor;
    void main() {
      gl_FragColor = vec4(vColor, 1.0);
    }
  `
);

extend({ GradientPointMaterial });
