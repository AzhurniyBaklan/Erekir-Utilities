const combustionChamber = extend(ConsumeGenerator, "combustion-chamber", {});
let white = Color.valueOf("f2ebb8");
let flame = Color.valueOf("f2de4b");
var r = Mathf.random(0.12);
combustionChamber.buildType = () => extend(ConsumeGenerator.ConsumeGeneratorBuild, combustionChamber, {
	draw(){
		Draw.rect(Core.atlas.find(combustionChamber.name + "-bottom"), this.x, this.y);
		if(this.items.get(Vars.content.getByName(ContentType.item, "graphite")) >= 2){
		Draw.alpha(0.75);
	    Draw.color(flame);
		Fill.circle(this.x, this.y, 2 + Mathf.absin(Time.time, 2, 4) + r);
		Draw.color();
		Draw.color(white);
		Fill.circle(this.x, this.y, 1.5 + Mathf.absin(Time.time, 1.2, 2.7) + r);
		Draw.color();
		};
		Draw.rect(Core.atlas.find(combustionChamber.name), this.x, this.y);
		Draw.rect(Core.atlas.find(combustionChamber.name + "-glass"), this.x, this.y);
		Draw.reset();
	},	
});