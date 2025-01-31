package com.fullstack_iipc_backend2.FullstackIipcBackend2.model;

import jakarta.persistence.*;

@Entity
@Table(name = "events")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type; // "InsideBIT" or "OutsideBIT"

    // Fields for both InsideBIT and OutsideBIT
    private String department;
    private String nameOfLecturer;
    private String nameOfProgram;
    private int totalStudentsAttended;
    private String venue;
    private String date;
    private String mode;

    // Fields for OutsideBIT
    private String location; // Only for OutsideBIT
    private String companyName; // Only for OutsideBIT
    private String companyAddress;
    private String designation; // Only for OutsideBIT
    private String domain; // Only for OutsideBIT
    private String referrer; // Only for OutsideBIT

    public Event() {}

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getNameOfLecturer() {
        return nameOfLecturer;
    }

    public void setNameOfLecturer(String nameOfLecturer) {
        this.nameOfLecturer = nameOfLecturer;
    }

    public String getNameOfProgram() {
        return nameOfProgram;
    }

    public void setNameOfProgram(String nameOfProgram) {
        this.nameOfProgram = nameOfProgram;
    }

    public int getTotalStudentsAttended() {
        return totalStudentsAttended;
    }

    public void setTotalStudentsAttended(int totalStudentsAttended) {
        this.totalStudentsAttended = totalStudentsAttended;
    }

    public String getVenue() {
        return venue;
    }

    public void setVenue(String venue) {
        this.venue = venue;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getMode() {
        return mode;
    }

    public void setMode(String mode) {
        this.mode = mode;
    }

    // Getters and Setters for OutsideBIT fields
    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getCompanyAddress() {
        return companyAddress;
    }

    public void setCompanyAddress(String companyAddress) {
        this.companyAddress = companyAddress;
    }
    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public String getDomain() {
        return domain;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }

    public String getReferrer() {
        return referrer;
    }

    public void setReferrer(String referrer) {
        this.referrer = referrer;
    }
}
