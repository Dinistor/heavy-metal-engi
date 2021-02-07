importPackage(Packages.java.time);
const array = extend(BurnerGenerator, "steamarray", {
	load() {
		this.super$load();
		this.region = Core.atlas.find(this.name);
		this.top = Core.atlas.find(this.name + "-top");
		this.CapRegion = Core.atlas.find(this.name + "-cap");
		this.liquidRegion = Core.atlas.find(this.name + "-liquid");
		this.turbineRegion0 = Core.atlas.find(this.name + "-turbine0");
		this.turbineRegion1 = Core.atlas.find(this.name + "-turbine1");

	}});


array.buildType = () => extend(BurnerGenerator.BurnerGeneratorBuild, array, {
//Color heatColor = Color.valueOf("ff9b59");
		for i 
	draw() {
		// body
		Draw.rect(array.region, this.x, this.y, 0);
		// new rotators, very shitty and cant rotate lol
		Draw.rect(array.turbineRegion0, this.x + 7, this.y + 7, 45);
                Draw.rect(array.turbineRegion1, this.x + 7, this.y + 7, 90);
		Draw.rect(array.turbineRegion0, this.x - 7, this.y + 7, 45);
                Draw.rect(array.turbineRegion1, this.x - 7, this.y + 7, 90);
		Draw.rect(array.turbineRegion0, this.x - 7, this.y - 7, 45);
                Draw.rect(array.turbineRegion1, this.x - 7, this.y - 7, 90);
		Draw.rect(array.turbineRegion0, this.x + 7, this.y - 7, 45);
                Draw.rect(array.turbineRegion1, this.x + 7, this.y - 7, 90);
		//cap
		Draw.rect(array.CapRegion, this.x, this.y, 0);
		//TODO: heat region
		//Draw.color(heatColor);
                //Draw.alpha(heat * 0.4f + Mathf.absin(Time.time(), 8f, 0.6f) * heat);
                //Draw.rect(array.topRegion, this.x, this.y);
                //Draw.reset();
	}});
array.buildLiquid = () => extend(ItemLiquidGenerator.ItemLiquidGeneratorBuild, array, {
	draw() {
Drawf.liquid(array.liquidRegion, this.x, this.y, this.liquids.total() / this.liquidCapacity, this.liquids.current().color);
}
});
