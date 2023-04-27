import { Subject, BehaviorSubject } from 'rxjs';

const chatListFilterText = new Subject();
const headerActiveTab = new BehaviorSubject('/');

export {

    chatListFilterText,
    headerActiveTab
}