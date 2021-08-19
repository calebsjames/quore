import { Injectable } from '@nestjs/common';
import { Issue } from './interfaces/issue.interface';

@Injectable()
export class IssuesService {
    private readonly issues: Issue[] = [
        {
            id: "1",
            title: "The first issue",
            url: "www.google.com",
            description: "This is the first of many issues",
            labels: "Problem",
            author: "Caleb James",
            comment_count: 314
        },
        {
            id: "2",
            title: "The last issue",
            url: "www.bing.com",
            description: "This is the worst of many issues",
            labels: "Problem",
            author: "Frank Frankerson",
            comment_count: 159
        }
    ];

    findAll(): Issue[] {
        return this.issues
    }

    findOne(id: string): Issue {
        return this.issues.find(i => i.id === id)
    }
}
