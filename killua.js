var names=new Array();
names[0]="Tejas";
names[1]="JOnathan";
names[2]="Jonny";
names[3]="killua";
names[4]="Alhaitem";
names[5]="Fred";
names[6]="kirito";
names[7]="ponyta";
names[8]="liam";
names[9]="thor";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}