package com.dileep.quire.controller;

import com.dileep.quire.entity.Issue;
import com.dileep.quire.repository.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/issue")
public class IssueController {

    @Autowired
    private IssueRepository issueRepository;

    @GetMapping("all")
    public List<Issue> findAll() {
        return issueRepository.findAll();
    }

    @PostMapping("/create")
    public Issue createIssue(@RequestBody Issue issue) {
        return issueRepository.save(issue);
    }

}
