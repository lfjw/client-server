# RBAC

- 基于角色的权限访问控制（Role-Based Access Control）
- RBAC（Role-Based Access Control，基于角色的访问控制），就是用户通过角色与权限进行关联
- 简单地说，一个用户拥有若干角色，每一个角色拥有若干权限。这样，就构造成“用户-角色-权限-资源”的授权模型
- 在这种模型中，用户与角色之间，角色与权限之间，权限与资源之间一般是多对多的关系。
- 在 rbac 中最重要的概念包括：用户(User)，角色(Role)，权限(Permission)，资源(Resource)

```sh
# ALTER 更改
# CONSTRAINT 约束
# FOREIGN 外键约束
# REFERENCES 外键
ALTER TABLE `user_role` ADD CONSTRAINT `fk_user_role_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
ALTER TABLE `user_role` ADD CONSTRAINT `fk_user_role_role_id` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);
ALTER TABLE `role_resource` ADD CONSTRAINT `fk_role_resource_role_id` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);
ALTER TABLE `role_resource` ADD CONSTRAINT `fk_role_resource_resource_id` FOREIGN KEY (`resource_id`) REFERENCES `resources` (`id`);
```
