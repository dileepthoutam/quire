package com.dileep.quire.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class Issue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String issueType;

    private String title;

    private String description;

    @Enumerated(EnumType.STRING)
    private BugStatus status;

    @Enumerated(EnumType.STRING)
    private BugPriority priority;

    private LocalDateTime createDate;

    private LocalDateTime updatedDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "assigned_user_id")
    private User assignedUser;

    public Issue() {}

    public Issue(String issueType, String title, String description, BugStatus status, BugPriority priority, User assignedUser) {
        this.issueType = issueType;
        this.title = title;
        this.description = description;
        this.status = status;
        this.priority = priority;
        this.assignedUser = assignedUser;
    }

    public String getIssueType() {
        return issueType;
    }

    public String getTitle() {
        return title;
    }

    public Long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public BugStatus getStatus() {
        return status;
    }

    public BugPriority getPriority() {
        return priority;
    }

    public LocalDateTime getCreateDate() {
        return createDate;
    }

    public LocalDateTime getUpdatedDate() {
        return updatedDate;
    }

    public User getAssignedUser() {
        return assignedUser;
    }

    public void setIssueType(String issueType) {
        this.issueType = issueType;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setStatus(BugStatus status) {
        this.status = status;
    }

    public void setPriority(BugPriority priority) {
        this.priority = priority;
    }

    public void setAssignedUser(User assignedUser) {
        this.assignedUser = assignedUser;
    }
}
