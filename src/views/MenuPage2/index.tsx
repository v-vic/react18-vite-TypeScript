import { useEffect } from "react";

import * as THREE from "three";
// 导入轨道控制器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"


const MenuPage2 = () => {
    // console.log(THREE);

    function init() {
        // 目标：了解three.js最基本的内容

        // 1、创建场景
        const scene = new THREE.Scene();

        // 2、创建相机
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        // 设置相机位置
        camera.position.set(0, 0, 10);
        scene.add(camera);

        // 添加物体
        // 创建几何体
        const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
        const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        // 根据几何体和材质创建物体
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

        // 将几何体添加到场景中
        scene.add(cube);

        // 初始化渲染器
        const renderer = new THREE.WebGLRenderer();
        // 设置渲染的尺寸大小
        renderer.setSize(500, 500);

        const AxesHelper = new THREE.AxesHelper(5);

        // 设置相机控件轨道控制器OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        // 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
        controls.addEventListener('change', function () {
            renderer.render(scene, camera); //执行渲染操作
        });//监听鼠标、键盘事件

        scene.add(AxesHelper);

        renderer.render(scene, camera)

        // 光源辅助观察
        const pointLight = new THREE.PointLight(0xededed, 1, 100);
        pointLight.position.set(10, 10, 10);
        scene.add(pointLight);
        const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.4);
        scene.add(pointLightHelper);

        //环境光:没有特定方向，整体改变场景的光照明暗
        const ambient = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambient);

        var myThree = document.getElementById('three') as HTMLElement

        myThree.appendChild(renderer.domElement);
    }

    useEffect(() => {
        init()
    }, [])


    return (
        <div>
            MenuPage2_1
            <div id="three"></div>
        </div>
    )
}
export default MenuPage2