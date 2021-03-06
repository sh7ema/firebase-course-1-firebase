import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {AngularFirestore} from '@angular/fire/firestore';
import {CoursesService} from '../services/courses.service';



@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    courses$: Observable<Course[]>;

    beginnersCourses$: Observable<Course[]>;

    advancedCourses$: Observable<Course[]>;

    constructor(private courseService: CoursesService) {

    }

    ngOnInit() {

        this.courses$ = this.courseService.loadAllCourses();

        this.beginnersCourses$ = this.courses$.pipe(
            map(courses => courses.filter(
                courses => courses.categories.includes("BEGINNER")))
        );
        this.advancedCourses$ = this.courses$.pipe(
            map(courses => courses.filter(
                courses => courses.categories.includes("ADVANCED")
            ))
        );
    }

}
