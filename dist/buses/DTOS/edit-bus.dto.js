"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditBusDTO = void 0;
const class_validator_1 = require("class-validator");
class EditBusDTO {
}
__decorate([
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], EditBusDTO.prototype, "brand", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], EditBusDTO.prototype, "model", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(8),
    __metadata("design:type", String)
], EditBusDTO.prototype, "plate", void 0);
exports.EditBusDTO = EditBusDTO;
//# sourceMappingURL=edit-bus.dto.js.map