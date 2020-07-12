import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { Question } from './models/Question';
import { gsap } from 'gsap';
import { questionsList } from './helpers/questionsList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentQuestionIndex = 0;

  @ViewChild('slider', { static: true }) slider: ElementRef<HTMLDivElement>;
  @ViewChild('answers', { static: true }) answers: ElementRef<HTMLDivElement>;
  @ViewChild('anss', { static: true }) anss: ElementRef<HTMLDivElement>;
  @ViewChild('menu', { static: true }) menu: ElementRef<HTMLDivElement>;
  @ViewChild('logo', { static: true }) logo: ElementRef<HTMLDivElement>;
  @ViewChild('search', { static: true }) search: ElementRef<HTMLDivElement>;
  @ViewChild('main', { static: true }) main: ElementRef<HTMLDivElement>;
  @ViewChild('actions', { static: true }) actions: ElementRef<HTMLDivElement>;
  @ViewChild('progress', { static: true }) progress: ElementRef<HTMLDivElement>;

  progressValue: number;
  questions = questionsList;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.initAnimations();
    this.increaseProgressValue();
  }

  initAnimations() {
    gsap.from(this.main.nativeElement, {
      delay: 0.2,
      duration: 0.4,
      opacity: 0,
      y: -20,
    });
    gsap.from(this.answers.nativeElement.childNodes, {
      delay: 0.5,
      duration: 0.4,
      opacity: 0,
      y: -20,
      stagger: 0.15,
    });
    gsap.from(this.menu.nativeElement.childNodes, {
      delay: 0.4,
      duration: 0.4,
      opacity: 0,
      y: -20,
      stagger: 0.15,
    });
    gsap.from(this.search.nativeElement.childNodes, {
      delay: 0.8,
      duration: 0.4,
      opacity: 0,
      y: -20,
      stagger: 0.15,
    });
    gsap.from(this.logo.nativeElement.childNodes, {
      delay: 0.3,
      duration: 0.4,
      opacity: 0,
      y: -20,
    });
    gsap.from(this.actions.nativeElement.childNodes, {
      delay: 0.6,
      duration: 0.4,
      opacity: 0,
      y: -20,
    });
    gsap.from(this.progress.nativeElement.childNodes, {
      delay: 0.7,
      duration: 0.4,
      opacity: 0,
      y: -20,
    });
  }

  increaseProgressValue(): void {
    this.progressValue =
      (100 * (this.currentQuestionIndex + 1)) / this.questions.length;
    if (this.currentQuestionIndex === 0) {
      gsap.to(this.slider.nativeElement, {
        delay: 0.7,
        duration: 0.6,
        width: `${this.progressValue}%`,
      });
    } else {
      gsap.to(this.slider.nativeElement, {
        duration: 0.6,
        width: `${this.progressValue}%`,
      });
    }
  }

  get question(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  onSelect(ans: HTMLDivElement) {
    this.anss.nativeElement.childNodes.forEach((node: HTMLDivElement) => {
      if (node.classList && node.classList.contains('selected')) {
        node.classList.remove('selected');
      }
    });
    ans.classList.add('selected');
  }

  prev() {
    if (this.currentQuestionIndex > 0) {
      gsap.to(this.answers.nativeElement.childNodes, {
        duration: 0.4,
        opacity: 0,
        y: -20,
        stagger: 0.15,
        onComplete: () => {
          if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.increaseProgressValue();
            this.cdr.detectChanges();
            gsap.to(this.answers.nativeElement.childNodes, {
              duration: 0.4,
              opacity: 1,
              y: 0,
              stagger: 0.15,
            });
          }
        },
      });
    }
  }

  goToNextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      gsap.to(this.answers.nativeElement.childNodes, {
        duration: 0.4,
        opacity: 0,
        y: -20,
        stagger: 0.15,
        onComplete: () => {
          this.currentQuestionIndex++;
          this.increaseProgressValue();
          this.cdr.detectChanges();
          gsap.to(this.answers.nativeElement.childNodes, {
            duration: 0.4,
            opacity: 1,
            y: 0,
            stagger: 0.2,
          });
        },
      });
    }
  }
}
