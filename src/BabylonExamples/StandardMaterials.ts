import {
  Scene,
  Engine,
  FreeCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  StandardMaterial,
  Texture,
} from "@babylonjs/core";

export class StandardMaterials {
  scene: Scene;
  engine: Engine;
  private canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.engine = new Engine(this.canvas, true);
    this.scene = this.CreateScene();

    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  CreateScene(): Scene {
    const scene = new Scene(this.engine);
    const camera = new FreeCamera("camera", new Vector3(0, 1, -5), this.scene);
    camera.attachControl();
    camera.speed = 0.25;

    const hemiLight = new HemisphericLight("hemiLight", new Vector3(0, 1, 0), this.scene);
    hemiLight.intensity = 1;

    const ground = MeshBuilder.CreateGround("ground", { width: 10, height: 10 }, this.scene);
    ground.material = this.CreateGroundMaterial();

    const ball = MeshBuilder.CreateSphere("ball", { diameter: 1 }, this.scene);
    ball.position = new Vector3(0, 1, 0);

    ball.material = this.CreateBallMaterial();

    return scene;
  }

  CreateGroundMaterial(): StandardMaterial {
    const groundMat = new StandardMaterial("groundMat", this.scene);

    const uvScale = 4;
    const texArray: Texture[] = [];

    const diffuseTex = new Texture("../images/textures/cobblestone/stone_diffuse.jpg", this.scene);
    groundMat.diffuseTexture = diffuseTex;
    texArray.push(diffuseTex);

    const normalTex = new Texture("../images/textures/cobblestone/stone_normal.jpg", this.scene);
    groundMat.bumpTexture = normalTex;
    texArray.push(normalTex);

    const aoTex = new Texture("../images/textures/cobblestone/stone_ao.jpg", this.scene);
    groundMat.ambientTexture = aoTex;
    texArray.push(aoTex);

    const specTex = new Texture("../images/textures/cobblestone/stone_spec.jpg", this.scene);
    groundMat.specularTexture = specTex;
    texArray.push(specTex);

    texArray.forEach((tex) => {
      tex.uScale = uvScale;
      tex.vScale = uvScale;
    });

    return groundMat;
  }

  CreateBallMaterial(): StandardMaterial {
    const ballMat = new StandardMaterial("ballMat", this.scene);
    const uvScale = 2;
    const texArray: Texture[] = [];

    const diffuseTex = new Texture("../images/textures/metal_plate/metal_diffuse.jpg", this.scene);
    ballMat.diffuseTexture = diffuseTex;
    texArray.push(diffuseTex);

    const normalTex = new Texture("../images/textures/metal_plate/metal_normal.jpg", this.scene);
    ballMat.bumpTexture = normalTex;
    ballMat.invertNormalMapX = true;
    ballMat.invertNormalMapY = true;
    texArray.push(normalTex);

    const aoTex = new Texture("../images/textures/metal_plate/metal_ao.jpg", this.scene);
    ballMat.ambientTexture = aoTex;
    texArray.push(aoTex);

    const specTex = new Texture("../images/textures/metal_plate/metal_spec.jpg", this.scene);
    ballMat.specularTexture = specTex;
    // ballMat.specularPower = 1;
    texArray.push(specTex);

    texArray.forEach((tex) => {
      tex.uScale = uvScale;
      tex.vScale = uvScale;
    });

    return ballMat;
  }
}
