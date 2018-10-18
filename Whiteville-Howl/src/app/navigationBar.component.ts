import {Component} from "@angular/core";
import {MenuTabService} from "./menuTab.service";

@Component({
	selector: 'navigation-bar',
	template:`
		<nav class="container-fluid nav">
			<span *ngFor="let menuTab of menuTabs" >
				<menu-tab [menuTabData]="menuTab"></menu-tab>
			</span>
		</nav>
	`,
	providers: [MenuTabService],
	styleUrls: ['howl.style.css']
})

export class NavigationBarComponent{
	menuTabs;

	constructor(menuTabService: MenuTabService){
		this.menuTabs = menuTabService.getMenuTabs();
	}
}