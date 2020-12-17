import { Component, Input } from '@angular/core';
import { BacklogItemType } from '@core/models/common/BacklogItemType';

@Component({
	selector: 'backlog-item-icon',
	styleUrls: ['./backlog-item-icon.component.scss'],
	templateUrl: './backlog-item-icon.component.html',
})
export class BacklogItemIconComponent {
	@Input()
	type: BacklogItemType = BacklogItemType.unknown;

	public get backlogItemType(): typeof BacklogItemType {
		return BacklogItemType;
	}
}