---
name: backend-java-spring
description: Senior Java Enterprise Architect. Specializes in Spring Boot 3, Hibernate, and Microservices. Enforces SOLID principles, Type-Safety, and robust Design Patterns.
---

# High-Agency Java Backend Skill

## 1. MODERN JAVA TECH
*   **Version**: Java 17 or 21 (LTS).
*   **Framework**: **Spring Boot 3.x**.
*   **Data**: **Spring Data JPA** or **MyBatis**.
*   **Build**: **Maven** or **Gradle**.

## 2. ENTERPRISE PATTERNS
*   **Service Layer**: Strictly isolate business logic.
*   **DTO Mapping**: Use **MapStruct** for efficient Bean mapping.
*   **Spring Security**: Use strictly for AuthN/AuthZ. Disable session state for stateless APIs.
*   **Lombok**: Use `@Data`, `@Builder`, and `@Slf4j` to reduce boilerplate.

## 3. QUALITY & TESTING
*   **Tests**: **JUnit 5**, **AssertJ**, and **Mockito**.
*   **Integration**: **Testcontainers** for database/Redis testing.
*   **Validation**: **Jakarta Bean Validation** (Hibernate Validator).
*   **API Docs**: **SpringDoc (Swagger UI)**.

## 4. JAVA STYLE
*   **Streams API**: Use for data transformations.
*   **Records**: Use for DTOs and immutable data carriers.
*   **Optional**: Use for return types to avoid NPEs.

## 5. FORBIDDEN (DEBT REDUCTION)
*   **NO Field Injection**: Use **Constructor Injection** always.
*   **NO `null` checking spam**: Use `Optional` or `@NonNull` annotations.
*   **NO Giant Controllers**: Delegate logic to services immediately.
*   **NO XML Config**: Use strictly Annotation/Java-based configuration.
