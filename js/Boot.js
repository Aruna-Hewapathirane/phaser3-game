class Boot extends Phaser.Scene {
  constructor() {
    super('Boot');
  }
  
  preload () {
    this.load.image('logo', 'assets/logo.png')
  }
  
  create() {
    const Logo = this.add.image(400,150,'logo')
    
    this.tweens.add({
	    // your target is the variable you added the image to, so Logo and not logo :-)
            // targets: logo, 
            targets: Logo,
            y: 550,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
        
  }
}
