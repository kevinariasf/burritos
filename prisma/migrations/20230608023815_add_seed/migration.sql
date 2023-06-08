INSERT INTO public."BurritoType"(
	id, name)
	VALUES (1, 'Chicken Burrito');
INSERT INTO public."Burrito"(
	id, size, price, "typeId")
	VALUES (1, 'SMALL', 5, 1);
INSERT INTO public."BurritoOption"(
	id, name, price)
	VALUES (1, 'Black olives', 1);
INSERT INTO public."BurritoOption"(
	id, name, price)
	VALUES (2, 'Sour cream', 2);
INSERT INTO public."Order"(
	id, "totalCost")
	VALUES (1, 14);
INSERT INTO public."OrderItem"(
	id, "orderId", "burritoId", quantity)
	VALUES (1, 1, 1, 1);
INSERT INTO public."OrderItem"(
	id, "orderId", "burritoId", quantity)
	VALUES (2, 1, 1, 1);
INSERT INTO public."OrderItemBurritoOption"(
	"orderItemId", "burritoOptionId")
	VALUES (1, 1);
INSERT INTO public."OrderItemBurritoOption"(
	"orderItemId", "burritoOptionId")
	VALUES (2, 1);
INSERT INTO public."OrderItemBurritoOption"(
	"orderItemId", "burritoOptionId")
	VALUES (2, 2);